// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { P2e } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { ic } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { An, Dr, ku } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { R, l, A, Jr, hv, Po } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { ae, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { bc, env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { jo, Bf, a_ } from "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import { execFileNoThrow, execFileNoThrowWithCwd } from "../Git-Worktree/chunk-9ys1bnqr.js";
import { bl } from "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import { H } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Eg } from "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import { ot, _ie, W6 } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { getSdkHostedBridgeHandle } from "../权限系统/chunk-1y2g140m.js";
import { outsideReadBlocked, pathInAllowedWorkingPath } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { formatFileSize } from "../../01-核心基础设施/共享小工具-未细化/chunk-7axvc6rn.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { toESM } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var B = null;
async function aK() {
  if (B) return B.default;
  if (bc())
    try {
      let r = await import("./getNativeModule.xtpfwxr8.js"),
        o = r.sharp || r.default;
      return ((B = { default: o }), o);
    } catch {
      console.warn(
        "Native image processor not available; no image processing will be available (sharp is stubbed in native builds)",
      );
    }
  let e = await import("./chunk-cj3p25ae.js").then((m) => toESM(m.default, 1)),
    t = ee(e);
  return ((B = { default: t }), t);
}
function ee(e) {
  let t = typeof e === "function" ? e : e.default;
  if (typeof t !== "function")
    throw Object.assign(
      Error(
        "sharp module loaded but its export is not callable (native libvips binding likely failed to load)",
      ),
      { code: "ERR_DLOPEN_FAILED" },
    );
  return t;
}
function iR(e) {
  if (e.length < 4) return null;
  if (e[0] === 137 && e[1] === 80 && e[2] === 78 && e[3] === 71)
    return "image/png";
  if (e[0] === 255 && e[1] === 216 && e[2] === 255) return "image/jpeg";
  if (
    e.length >= 6 &&
    e[0] === 71 &&
    e[1] === 73 &&
    e[2] === 70 &&
    e[3] === 56 &&
    (e[4] === 55 || e[4] === 57) &&
    e[5] === 97
  )
    return "image/gif";
  if (
    e[0] === 82 &&
    e[1] === 73 &&
    e[2] === 70 &&
    e[3] === 70 &&
    e.length >= 12 &&
    e[8] === 87 &&
    e[9] === 69 &&
    e[10] === 66 &&
    e[11] === 80
  )
    return "image/webp";
  return null;
}
function mSn(e) {
  if (e.subarray(0, 4).toString("latin1").toLowerCase() === "%pdf")
    return "pdf";
  if (e[0] === 80 && e[1] === 75 && e[2] === 3 && e[3] === 4) return "zip";
  return null;
}
function u7e(e) {
  let t = e.subarray(0, 32),
    r = t.toString("latin1").replace(/[^\x20-\x7e]/g, "."),
    o = r.toLowerCase();
  if (o.includes("<!doctype") || o.includes("<html"))
    return `HTML document (starts with "${r.slice(0, 24)}")`;
  if (o.startsWith("<?xml") || o.startsWith("<svg"))
    return `XML/SVG document (starts with "${r.slice(0, 24)}")`;
  if (o.startsWith("{") || o.startsWith("["))
    return `JSON/text (starts with "${r.slice(0, 24)}")`;
  let s = mSn(t);
  if (s === "pdf") return "PDF document";
  if (s === "zip")
    return "ZIP archive (Office documents such as .pptx/.docx/.xlsx are ZIPs)";
  return `unrecognized bytes (hex: ${t.subarray(0, 8).toString("hex").replace(/(..)/g, "$1 ").trim()})`;
}
function KNe(e) {
  return iR(e) ?? "image/png";
}
function N3t(e) {
  try {
    let t = Buffer.from(e, "base64");
    return KNe(t);
  } catch {
    return "image/png";
  }
}
function Ure(e) {
  if (e.length < 10) return;
  if (
    e[0] === 137 &&
    e[1] === 80 &&
    e[2] === 78 &&
    e[3] === 71 &&
    e.length >= 24
  )
    return { width: e.readUInt32BE(16), height: e.readUInt32BE(20) };
  if (e[0] === 71 && e[1] === 73 && e[2] === 70)
    return { width: e.readUInt16LE(6), height: e.readUInt16LE(8) };
  if (e[0] === 255 && e[1] === 216) {
    let t = 2;
    while (t + 9 < e.length) {
      if (e[t] !== 255) {
        t++;
        continue;
      }
      let r = e[t + 1];
      if (r === 255) {
        t++;
        continue;
      }
      if (
        r !== void 0 &&
        r >= 192 &&
        r <= 207 &&
        r !== 196 &&
        r !== 200 &&
        r !== 204
      )
        return { height: e.readUInt16BE(t + 5), width: e.readUInt16BE(t + 7) };
      if (r === void 0 || (r >= 208 && r <= 217) || r === 1) {
        t += 2;
        continue;
      }
      let o = e.readUInt16BE(t + 2);
      if (o < 2) return;
      t += 2 + o;
    }
    return;
  }
  if (
    e[0] === 82 &&
    e[1] === 73 &&
    e[2] === 70 &&
    e[3] === 70 &&
    e.length >= 30 &&
    e[8] === 87 &&
    e[9] === 69 &&
    e[10] === 66 &&
    e[11] === 80
  ) {
    let t = e.toString("ascii", 12, 16);
    if (t === "VP8 ")
      return {
        width: e.readUInt16LE(26) & 16383,
        height: e.readUInt16LE(28) & 16383,
      };
    if (t === "VP8L") {
      let r = e.readUInt32LE(21);
      return { width: (r & 16383) + 1, height: ((r >> 14) & 16383) + 1 };
    }
    if (t === "VP8X")
      return {
        width: e.readUIntLE(24, 3) + 1,
        height: e.readUIntLE(27, 3) + 1,
      };
  }
  return;
}
var M3t = "[Image: ",
  VNe = "[Image source: ";
var z = 1,
  te = 2,
  U = 3,
  re = 4,
  O = 5,
  ie = 6,
  ne = 7,
  oe = 8;
class vH extends Error {
  constructor(e) {
    super(e);
    this.name = "ImageResizeError";
  }
}
function j(e) {
  if (e instanceof Error) {
    let r = e;
    if (
      r.code === "MODULE_NOT_FOUND" ||
      r.code === "ERR_MODULE_NOT_FOUND" ||
      r.code === "ERR_DLOPEN_FAILED"
    )
      return z;
    if (r.code === "EACCES" || r.code === "EPERM") return oe;
    if (r.code === "ENOMEM") return O;
  }
  let t = l(e);
  if (t.includes("Native image processor module not available")) return z;
  if (
    t.includes("unsupported image format") ||
    t.includes("Input buffer") ||
    t.includes("Input file is missing") ||
    t.includes("Input file has corrupt header") ||
    t.includes("corrupt header") ||
    t.includes("corrupt image") ||
    t.includes("premature end") ||
    t.includes("zlib: data error") ||
    t.includes("zero width") ||
    t.includes("zero height") ||
    t.startsWith("Failed to decode image:") ||
    t.startsWith("Failed to guess image format:") ||
    t === "Unable to determine image format"
  )
    return te;
  if (
    t.includes("pixel limit") ||
    t.includes("too many pixels") ||
    t.includes("exceeds pixel") ||
    t.includes("image dimensions")
  )
    return re;
  if (
    t.includes("out of memory") ||
    t.includes("Cannot allocate") ||
    t.includes("memory allocation")
  )
    return O;
  if (t.includes("timeout") || t.includes("timed out")) return ie;
  if (t.includes("Vips")) return ne;
  return U;
}
function G(e, t) {
  if (e === U) return !0;
  if (e === z) return A(t) !== "ERR_DLOPEN_FAILED";
  return !1;
}
function q(e) {
  if (!(e instanceof Error))
    return { error_name: fromEnum(typeof e), error_code: S("") };
  return {
    error_name:
      hv(e.name !== "Error" ? e.name : e.constructor?.name) ?? S("Error"),
    error_code: Jr(e) ?? hv(A(e)) ?? S(""),
  };
}
function V(e) {
  let t = 5381;
  for (let r = 0; r < e.length; r++) t = ((t << 5) + t + e.charCodeAt(r)) | 0;
  return t >>> 0;
}
async function qpe(e, t, r, o) {
  if (e.length === 0) throw new vH("Image file is empty (0 bytes)");
  try {
    let s = await aK(),
      c = await s(e).metadata(),
      d = c.format ?? r,
      p = d === "jpg" ? "jpeg" : d;
    if (!c.width || !c.height) {
      let I = Ure(e);
      if (I === void 0 || I.width > o.maxWidth || I.height > o.maxHeight)
        throw new vH(
          `Unable to resize image \u2014 could not verify image dimensions are within the ${o.maxWidth}x${o.maxHeight}px API limit.`,
        );
      if (t > o.targetRawSize)
        return (
          logEvent("tengu_image_resize", {
            over_byte_limit: !0,
            over_dimension_limit: !1,
            original_size_bytes: t,
          }),
          {
            buffer: await s(e).jpeg({ quality: 80 }).toBuffer(),
            mediaType: "jpeg",
          }
        );
      return { buffer: e, mediaType: p };
    }
    let { width: g, height: x } = c,
      w = g,
      _ = x;
    if (t <= o.targetRawSize && w <= o.maxWidth && _ <= o.maxHeight)
      return {
        buffer: e,
        mediaType: p,
        dimensions: {
          originalWidth: g,
          originalHeight: x,
          displayWidth: w,
          displayHeight: _,
        },
      };
    let E = w > o.maxWidth || _ > o.maxHeight,
      W = p === "png";
    if (
      (logEvent("tengu_image_resize", {
        over_byte_limit: t > o.targetRawSize,
        over_dimension_limit: E,
        original_size_bytes: t,
        original_width: g,
        original_height: x,
      }),
      !E && t > o.targetRawSize)
    ) {
      if (W) {
        let I = await s(e).png({ compressionLevel: 9, palette: !0 }).toBuffer();
        if (I.length <= o.targetRawSize)
          return {
            buffer: I,
            mediaType: "png",
            dimensions: {
              originalWidth: g,
              originalHeight: x,
              displayWidth: w,
              displayHeight: _,
            },
          };
      }
      for (let I of [80, 60, 40, 20]) {
        let b = await s(e).jpeg({ quality: I }).toBuffer();
        if (b.length <= o.targetRawSize)
          return {
            buffer: b,
            mediaType: "jpeg",
            dimensions: {
              originalWidth: g,
              originalHeight: x,
              displayWidth: w,
              displayHeight: _,
            },
          };
      }
    }
    if (w > o.maxWidth)
      ((_ = Math.round((_ * o.maxWidth) / w)), (w = o.maxWidth));
    if (_ > o.maxHeight)
      ((w = Math.round((w * o.maxHeight) / _)), (_ = o.maxHeight));
    n(`Resizing to ${w}x${_}`);
    let k = await s(e)
      .resize(w, _, { fit: "inside", withoutEnlargement: !0 })
      .toBuffer();
    if (k.length > o.targetRawSize) {
      if (W) {
        let T = await s(e)
          .resize(w, _, { fit: "inside", withoutEnlargement: !0 })
          .png({ compressionLevel: 9, palette: !0 })
          .toBuffer();
        if (T.length <= o.targetRawSize)
          return {
            buffer: T,
            mediaType: "png",
            dimensions: {
              originalWidth: g,
              originalHeight: x,
              displayWidth: w,
              displayHeight: _,
            },
          };
      }
      for (let T of [80, 60, 40, 20]) {
        let N = await s(e)
          .resize(w, _, { fit: "inside", withoutEnlargement: !0 })
          .jpeg({ quality: T })
          .toBuffer();
        if (N.length <= o.targetRawSize)
          return {
            buffer: N,
            mediaType: "jpeg",
            dimensions: {
              originalWidth: g,
              originalHeight: x,
              displayWidth: w,
              displayHeight: _,
            },
          };
      }
      let I = Math.min(w, 1000),
        b = Math.round((_ * I) / Math.max(w, 1));
      n("Still too large, compressing with JPEG");
      let M = await s(e)
        .resize(I, b, { fit: "inside", withoutEnlargement: !0 })
        .jpeg({ quality: 20 })
        .toBuffer();
      return (
        n(`JPEG compressed buffer size: ${M.length}`),
        {
          buffer: M,
          mediaType: "jpeg",
          dimensions: {
            originalWidth: g,
            originalHeight: x,
            displayWidth: I,
            displayHeight: b,
          },
        }
      );
    }
    return {
      buffer: k,
      mediaType: p,
      dimensions: {
        originalWidth: g,
        originalHeight: x,
        displayWidth: w,
        displayHeight: _,
      },
    };
  } catch (s) {
    if (s instanceof vH) throw s;
    let m = j(s),
      c = l(s);
    if (G(m, s)) logError(s);
    else n(`Image resize failed: ${c}`, { level: "error" });
    logEvent("tengu_image_resize_failed", {
      original_size_bytes: t,
      error_type: m,
      error_message_hash: V(c),
      ...q(s),
    });
    let p = KNe(e).slice(6),
      g = Math.ceil((t * 4) / 3),
      x = Ure(e);
    if (x === void 0)
      throw new vH(
        "Unable to resize image \u2014 image processing is unavailable and dimensions could not be read from the file header. " +
          "Please convert the image to PNG, JPEG, GIF, or WebP.",
      );
    let w = x.width > o.maxWidth || x.height > o.maxHeight;
    if (g <= o.maxBase64Size && !w)
      return (
        logEvent("tengu_image_resize_fallback", {
          original_size_bytes: t,
          base64_size_bytes: g,
          error_type: m,
        }),
        { buffer: e, mediaType: p }
      );
    throw new vH(
      w
        ? `Unable to resize image \u2014 dimensions exceed the ${o.maxWidth}x${o.maxHeight}px limit and image processing failed. Please resize the image to reduce its pixel dimensions.`
        : `Unable to resize image (${formatFileSize(t)} raw, ${formatFileSize(g)} base64). The image exceeds the ${formatFileSize(o.maxBase64Size)} API limit and compression failed. Please resize the image manually or use a smaller image.`,
    );
  }
}
async function gSn(e, t, r) {
  let o = await aK(),
    s = (x) => o(e).jpeg({ quality: x }).toBuffer(),
    m = e,
    c = 90;
  if (!/jpe?g/i.test(r)) {
    let x = await s(90);
    if (x.length < m.length) m = x;
    if (x.length <= t) return x;
    c = 89;
  }
  let p = 1,
    g;
  for (let x = 0; x < 5; x++) {
    let w = Math.floor((p + c) / 2),
      _ = await s(w);
    if (_.length < m.length) m = _;
    if (_.length <= t) ((g = _), (p = w + 1));
    else c = w - 1;
    if (p > c) break;
  }
  return g ?? m;
}
async function Bg({ data: e, mediaType: t, limits: r }) {
  let o = Buffer.isBuffer(e) ? e : Buffer.from(e, "base64"),
    s = t?.includes("/") ? t.split("/")[1] || "png" : t || "png",
    m;
  try {
    m = await qpe(o, o.length, s, r);
  } catch (p) {
    if (p instanceof vH)
      return (
        logEvent("tengu_image_resize_degraded", {}),
        {
          block: {
            type: "text",
            text: `[Image could not be processed: ${p.message}]`,
          },
        }
      );
    throw p;
  }
  let c = m.buffer;
  if (c.length > P2e)
    try {
      c = await gSn(m.buffer, P2e, m.mediaType);
    } catch (p) {
      n(
        `Image byte-budget compression failed, passing through unbudgeted: ${l(p)}`,
        { level: "error" },
      );
    }
  return {
    block: {
      type: "image",
      source: {
        type: "base64",
        media_type: KNe(c),
        data: c.toString("base64"),
      },
    },
    dimensions: m.dimensions,
  };
}
async function iJn(e, t) {
  let r = iR(e);
  if (r === null) return null;
  try {
    let { block: o } = await Bg({ data: e, mediaType: r, limits: t });
    return o.type === "image" ? o : null;
  } catch {
    return null;
  }
}
async function aJn(e, t) {
  if (e.source.type !== "base64") return { block: e };
  return Bg({ data: e.source.data, mediaType: e.source.media_type, limits: t });
}
async function Y(e, t, r) {
  let o = r?.split("/")[1] || "jpeg",
    s = o === "jpg" ? "jpeg" : o;
  try {
    let m = await aK(),
      c = await m(e).metadata(),
      d = c.format || s,
      p = e.length,
      g = {
        imageBuffer: e,
        metadata: c,
        format: d,
        maxBytes: t,
        originalSize: p,
      };
    if (p <= t) return v(e, d, p);
    let x = await se(g, m);
    if (x) return x;
    if (d === "png") {
      let _ = await me(g, m);
      if (_) return _;
    }
    let w = await ce(g, 50, m);
    if (w) return w;
    return await de(g, m);
  } catch (m) {
    let c = j(m),
      d = l(m);
    if (G(c, m)) logError(m);
    else n(`Image compression failed: ${d}`, { level: "error" });
    if (
      (logEvent("tengu_image_compress_failed", {
        original_size_bytes: e.length,
        max_bytes: t,
        error_type: c,
        error_message_hash: V(d),
        ...q(m),
      }),
      e.length <= t)
    ) {
      let p = KNe(e);
      return {
        base64: e.toString("base64"),
        mediaType: p,
        originalSize: e.length,
      };
    }
    throw new vH(
      `Unable to compress image (${formatFileSize(e.length)}) to fit within ${formatFileSize(t)}. Please use a smaller image.`,
    );
  }
}
async function lJn(e, t, r) {
  let o = Math.floor(t / 0.125),
    s = Math.floor(o * 0.75);
  return Y(e, s, r);
}
async function cJn(e, t) {
  if (e.source.type !== "base64") return e;
  let r = Buffer.from(e.source.data, "base64");
  if (r.length <= t) return e;
  let o = await Y(r, t);
  return {
    type: "image",
    source: { type: "base64", media_type: o.mediaType, data: o.base64 },
  };
}
function v(e, t, r) {
  let o = t === "jpg" ? "jpeg" : t;
  return {
    base64: e.toString("base64"),
    mediaType: `image/${o}`,
    originalSize: r,
  };
}
async function se(e, t) {
  let r = [1, 0.75, 0.5, 0.25];
  for (let o of r) {
    let s = Math.round((e.metadata.width || 2000) * o),
      m = Math.round((e.metadata.height || 2000) * o),
      c = t(e.imageBuffer).resize(s, m, {
        fit: "inside",
        withoutEnlargement: !0,
      });
    c = le(c, e.format);
    let d = await c.toBuffer();
    if (d.length <= e.maxBytes) return v(d, e.format, e.originalSize);
  }
  return null;
}
function le(e, t) {
  switch (t) {
    case "png":
      return e.png({ compressionLevel: 9, palette: !0 });
    case "jpeg":
    case "jpg":
      return e.jpeg({ quality: 80 });
    case "webp":
      return e.webp({ quality: 80 });
    default:
      return e;
  }
}
async function me(e, t) {
  let r = await t(e.imageBuffer)
    .resize(800, 800, { fit: "inside", withoutEnlargement: !0 })
    .png({ compressionLevel: 9, palette: !0, colors: 64 })
    .toBuffer();
  if (r.length <= e.maxBytes) return v(r, "png", e.originalSize);
  return null;
}
async function ce(e, t, r) {
  let o = await r(e.imageBuffer)
    .resize(600, 600, { fit: "inside", withoutEnlargement: !0 })
    .jpeg({ quality: t })
    .toBuffer();
  if (o.length <= e.maxBytes) return v(o, "jpeg", e.originalSize);
  return null;
}
async function de(e, t) {
  let r = await t(e.imageBuffer)
    .resize(400, 400, { fit: "inside", withoutEnlargement: !0 })
    .jpeg({ quality: 20 })
    .toBuffer();
  return v(r, "jpeg", e.originalSize);
}
function XNe(e, t) {
  let {
    originalWidth: r,
    originalHeight: o,
    displayWidth: s,
    displayHeight: m,
  } = e;
  if (!r || !o || !s || !m || s <= 0 || m <= 0) {
    if (t) return `${VNe}${t}]`;
    return null;
  }
  let c = r !== s || o !== m;
  if (!c && !t) return null;
  let d = [];
  if (t) d.push(`source: ${t}`);
  if (c) {
    let p = r / s;
    d.push(
      `original ${r}x${o}, displayed at ${s}x${m}. Multiply coordinates by ${p.toFixed(2)} to map to original image.`,
    );
  }
  return `${M3t}${d.join(", ")}]`;
}
import { randomBytes } from "crypto";
import {
  basename as fe,
  dirname,
  isAbsolute as ye,
  join as D,
} from "path";
function cbt(e) {
  let t = e.match(/^([A-Z]):(.*)$/i);
  if (!t) return null;
  return `/mnt/${t[1].toLowerCase()}${t[2].replaceAll("\\", "/")}`;
}
class LAe {
  wslDistroName;
  constructor(e) {
    this.wslDistroName = e;
  }
  async toLocalPath(e) {
    if (!e) return e;
    if (this.wslDistroName) {
      let s = e.match(/^\\\\wsl(?:\.localhost|\$)\\([^\\]+)(.*)$/);
      if (s && s[1] !== this.wslDistroName) return e;
    }
    let { stdout: t, code: r } = await execFileNoThrow("wslpath", ["-u", e], { useCwd: !1 }),
      o = t.trim();
    if (r === 0 && o) return o;
    return cbt(e) ?? e.replaceAll("\\", "/");
  }
  async toIDEPath(e) {
    if (!e) return e;
    let { stdout: t, code: r } = await execFileNoThrow("wslpath", ["-w", e], { useCwd: !1 }),
      o = t.trim();
    if (r === 0 && o) return o;
    return e;
  }
}
function uJn(e, t) {
  let r = e.match(/^\\\\wsl(?:\.localhost|\$)\\([^\\]+)(.*)$/);
  if (r) return r[1] === t;
  return !0;
}
var ue = /[\u2018-\u201F]/;
function zNe(e, t = "value") {
  let r = ue.exec(e);
  if (r) {
    let o = (r[0].codePointAt(0) ?? 0)
      .toString(16)
      .toUpperCase()
      .padStart(4, "0");
    throw new R(
      `Cannot safely quote ${t} in a PowerShell single-quoted string literal: it contains U+${o}, which PowerShell's tokenizer treats as a quote delimiter`,
      "psSingleQuotedLiteral: rejected a PowerShell quote-variant codepoint (U+2018..U+201F)",
    );
  }
  return `'${e.replaceAll("'", "''")}'`;
}
var lK = 800,
  C = {
    darwin:
      "osascript -e 'get POSIX path of (the clipboard as \xABclass furl\xBB)'",
    linux:
      "xclip -selection clipboard -t text/plain -o 2>/dev/null || wl-paste 2>/dev/null",
    win32: ["powershell", "-NoProfile", "-Command", "Get-Clipboard"],
  };
function we() {
  let t = bl(),
    r = "claude_cli_latest_screenshot.png",
    o = {
      darwin: D(t, "claude_cli_latest_screenshot.png"),
      linux: D(t, "claude_cli_latest_screenshot.png"),
      win32: D(t, "claude_cli_latest_screenshot.png"),
    },
    s = o.darwin || o.linux,
    m = jo([s]),
    d = `set fp to open for access POSIX file ${`"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`} with write permission`,
    p = "",
    g = !1,
    x =
      '"$(command -v powershell.exe 2>/dev/null || echo /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe)"',
    w = "",
    _ = "",
    E = {
      darwin: {
        checkImage: "osascript -e 'the clipboard as \xABclass PNGf\xBB'",
        saveImage: `osascript -e 'set png_data to (the clipboard as \xABclass PNGf\xBB)' -e ${jo([d])} -e 'write png_data to fp' -e 'close access fp'`,
        getPath: C.darwin,
        deleteFile: `rm -f -- ${m}`,
      },
      linux: {
        checkImage:
          'xclip -selection clipboard -t TARGETS -o 2>/dev/null | grep -E "image/(png|jpeg|jpg|gif|webp|bmp)" || wl-paste -l 2>/dev/null | grep -E "image/(png|jpeg|jpg|gif|webp|bmp)"',
        saveImage: `xclip -selection clipboard -t image/png -o > ${m} 2>/dev/null || wl-paste --type image/png > ${m} 2>/dev/null || xclip -selection clipboard -t image/bmp -o > ${m} 2>/dev/null || wl-paste --type image/bmp > ${m}`,
        getPath: C.linux,
        deleteFile: `rm -f -- ${m}`,
      },
      win32: {
        checkImage: [
          "powershell",
          "-NoProfile",
          "-NonInteractive",
          "-Sta",
          "-Command",
          "Add-Type -AssemblyName System.Windows.Forms; if (-not [System.Windows.Forms.Clipboard]::ContainsImage()) { exit 1 }",
        ],
        saveImage: [
          "powershell",
          "-NoProfile",
          "-NonInteractive",
          "-Sta",
          "-Command",
          "Add-Type -AssemblyName System.Windows.Forms; $img = [System.Windows.Forms.Clipboard]::GetImage(); if ($null -eq $img) { exit 1 }; $img.Save(, [System.Drawing.Imaging.ImageFormat]::Png)",
        ],
        getPath: C.win32,
        deleteFile: [
          "powershell",
          "-NoProfile",
          "-Command",
          "Remove-Item -Force -LiteralPath ",
        ],
      },
    };
  return { commands: E.darwin || E.linux, screenshotPath: s };
}
async function F(e) {
  if (typeof e === "string") return a_(e, { reject: !1 });
  let [t, ...r] = e;
  return Bf(t, r, { reject: !1 });
}
async function dJn() {
  try {
    let { getNativeModule: t } = await import("./getNativeModule.xtpfwxr8.js"),
      r = t()?.hasClipboardImage;
    if (r) return r();
  } catch (t) {
    logError(t);
  }
  return (
    (await execFileNoThrowWithCwd("osascript", ["-e", "the clipboard as \xABclass PNGf\xBB"]))
      .code === 0
  );
}
async function Z3(e) {
  try {
    let { getNativeModule: s } = await import("./getNativeModule.xtpfwxr8.js"),
      m = s()?.readClipboardImage;
    if (!m) throw Error("native clipboard reader unavailable");
    let c = m(e.maxWidth, e.maxHeight);
    if (!c) return null;
    let d = c.png;
    if (d.length > e.targetRawSize) {
      let p = await qpe(d, d.length, "png", e);
      return (
        logFeatureOk("clipboard_read"),
        {
          base64: p.buffer.toString("base64"),
          mediaType: `image/${p.mediaType}`,
          dimensions: {
            originalWidth: c.originalWidth,
            originalHeight: c.originalHeight,
            displayWidth: p.dimensions?.displayWidth ?? c.width,
            displayHeight: p.dimensions?.displayHeight ?? c.height,
          },
        }
      );
    }
    return (
      logFeatureOk("clipboard_read"),
      {
        base64: d.toString("base64"),
        mediaType: "image/png",
        dimensions: {
          originalWidth: c.originalWidth,
          originalHeight: c.originalHeight,
          displayWidth: c.width,
          displayHeight: c.height,
        },
      }
    );
  } catch (s) {
    if (s instanceof vH)
      n(`Native clipboard resize failed: ${s.message}`, { level: "error" });
    else logError(s);
  }
  let t;
  try {
    t = we();
  } catch (s) {
    return (logError(s), logFeatureBad("clipboard_read", "construct_failed"), null);
  }
  let { commands: r, screenshotPath: o } = t;
  try {
    if ((await F(r.checkImage)).exitCode !== 0) return null;
    if (
      (await ae().mkdir(dirname(o), { mode: 448 }),
      (await F(r.saveImage)).exitCode !== 0)
    )
      return (logFeatureBad("clipboard_read", "save_failed"), null);
    let c = await ae().readFileBytes(o);
    if (c.length >= 2 && c[0] === 66 && c[1] === 77)
      c = await (await aK())(c).png().toBuffer();
    let d = await qpe(c, c.length, "png", e),
      p = d.buffer.toString("base64"),
      g = N3t(p);
    return (
      F(r.deleteFile),
      logFeatureOk("clipboard_read"),
      { base64: p, mediaType: g, dimensions: d.dimensions }
    );
  } catch {
    return (logFeatureBad("clipboard_read", "read_failed"), null);
  }
}
async function xe() {
  try {
    let t = C.darwin || C.linux,
      r = await F(t);
    if (r.exitCode !== 0 || !r.stdout) return null;
    return r.stdout.trim();
  } catch (e) {
    return (
      n(
        `Failed to read image path from clipboard: ${e instanceof Error ? e.message : String(e)}`,
        { level: "error" },
      ),
      null
    );
  }
}
var d7e = /\.(png|jpe?g|gif|webp)$/i;
function X(e) {
  if (
    (e.startsWith('"') && e.endsWith('"')) ||
    (e.startsWith("'") && e.endsWith("'"))
  )
    return e.slice(1, -1);
  return e;
}
var J = /^(?:[A-Za-z]:\\|\\\\)/;
function Z(e) {
  if (P() === "wsl" && J.test(e)) return e;
  let o = `__DOUBLE_BACKSLASH_${randomBytes(8).toString("hex")}__`;
  return e
    .replaceAll("\\\\", o)
    .replace(/\\(.)/g, "$1")
    .replace(new RegExp(o, "g"), "\\");
}
function pJn(e) {
  let t = X(e.trim()),
    r = Z(t);
  return d7e.test(r);
}
function _e(e) {
  let t = X(e.trim()),
    r = Z(t);
  if (d7e.test(r)) return r;
  return null;
}
async function fJn(e, t) {
  let r = _e(e);
  if (!r) return null;
  let o = r;
  if (P() === "wsl" && J.test(o))
    o = await new LAe(a.WSL_DISTRO_NAME).toLocalPath(o);
  let s;
  try {
    if (ye(o)) s = await ae().readFileBytes(o);
    else {
      let g = await xe();
      if (g && o === fe(g)) s = await ae().readFileBytes(g);
    }
  } catch (g) {
    return (
      n(
        `Failed to read pasted image file ${o}: ${g instanceof Error ? g.message : String(g)}`,
        { level: "error" },
      ),
      null
    );
  }
  if (!s) return null;
  if (s.length === 0)
    return (n(`Image file is empty: ${o}`, { level: "warn" }), null);
  if (s.length >= 2 && s[0] === 66 && s[1] === 77)
    s = await (await aK())(s).png().toBuffer();
  let m = iR(s);
  if (m === null)
    return (
      n(
        `Pasted path has image extension but content is not a supported image: ${o}`,
        { level: "warn" },
      ),
      null
    );
  let c = m.split("/")[1] || "png",
    d = await qpe(s, s.length, c, t),
    p = d.buffer.toString("base64");
  return { path: o, base64: p, mediaType: m, dimensions: d.dimensions };
}
function hSn(e) {
  if (e.includes("\x00")) return !0;
  let t = e.slice(0, 4096);
  if (t.length < 32) return !1;
  let r = 0;
  for (let o of t) if (o === "\uFFFD") r++;
  return r / t.length > 0.05;
}
import { stat as L } from "fs/promises";
import {
  basename as Ie,
  extname,
  isAbsolute as Ee,
  join as Pe,
} from "path";
function ubt(e) {
  if (e.replBridgeEnabled) return "repl";
  if (a.CLAUDE_CODE_BRIEF_UPLOAD) return "env_brief_upload";
  if (a.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE) return "env_ccr";
  if (a.CLAUDE_CODE_REMOTE) return "env_byoc";
  if (getSdkHostedBridgeHandle() !== null && ic())
    return H("tengu_async_goblet", !0) ? "sdk_hosted" : "sdk_hosted_disabled";
  return "none";
}
function dbt(e) {
  return e === "sdk_hosted" && Eg();
}
var Se = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".bmp": "image/bmp",
  ".ico": "image/x-icon",
  ".heic": "image/heic",
  ".heif": "image/heif",
  ".avif": "image/avif",
  ".tif": "image/tiff",
  ".tiff": "image/tiff",
  ".mp4": "video/mp4",
  ".m4v": "video/x-m4v",
  ".mov": "video/quicktime",
  ".webm": "video/webm",
  ".avi": "video/x-msvideo",
  ".mkv": "video/x-matroska",
  ".mp3": "audio/mpeg",
  ".m4a": "audio/mp4",
  ".wav": "audio/wav",
  ".ogg": "audio/ogg",
  ".aac": "audio/aac",
  ".flac": "audio/flac",
  ".pdf": "application/pdf",
  ".txt": "text/plain",
  ".log": "text/plain",
  ".md": "text/markdown",
  ".json": "application/json",
  ".csv": "text/csv",
  ".html": "text/html",
  ".htm": "text/html",
  ".xml": "application/xml",
  ".docx":
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ".pptx":
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ".zip": "application/zip",
};
function YNe(e) {
  return Se[extname(e).toLowerCase()];
}
function K(e) {
  return typeof e !== "string";
}
async function ve(e, t, r) {
  let o = await W6(t);
  if (o) return o;
  if (!Ee(e)) {
    let [s, ...m] = e.split(/[\\/]+/);
    if (s === Ie(r) && m.length > 0) {
      let c = Pe(r, ...m);
      try {
        if ((await L(c)).isFile()) return m.join("/");
      } catch {}
    }
  }
  return await _ie(t);
}
function _Sn(e) {
  if (/^[a-z][a-z0-9+.-]+:\/\//i.test(e))
    return {
      result: !1,
      message: `Attachment "${e}" looks like a URL, not a local file path. This tool can only send files that exist on the local filesystem \u2014 download or write the content to a local file first, then pass that path.`,
      errorCode: 1,
    };
  let t = ot(e);
  if (An(t))
    return {
      result: !1,
      message: `Attachment "${e}" is a UNC network path, which is not supported.`,
      errorCode: 1,
    };
  if (Dr(t))
    return {
      result: !1,
      message: `Attachment "${e}" is a /net autofs -hosts path, which is not supported.`,
      errorCode: 1,
    };
  return;
}
async function pbt(e, t) {
  let r = Q();
  for (let o of e) {
    if (K(o)) continue;
    let s = _Sn(o);
    if (s !== void 0) return s;
    let m = ot(o);
    if (t.restricted && !pathInAllowedWorkingPath(m, t))
      return {
        result: !1,
        message: `Attachment "${o}" is outside the working directory; --restricted only sends files from inside it.`,
        errorCode: 1,
      };
    if (outsideReadBlocked(m, t))
      return {
        result: !1,
        message: `Attachment "${o}" is outside the working directories; reads outside them are blocked (permissions.blockReadsOutsideWorkingDirectories).`,
        errorCode: 1,
      };
    try {
      if (!(await L(m)).isFile())
        return {
          result: !1,
          message: `Attachment "${o}" is not a regular file.`,
          errorCode: 1,
        };
    } catch (c) {
      let d = A(c);
      if (d === "ENOENT") {
        let p = await ve(o, m, r);
        return {
          result: !1,
          message:
            `Attachment "${o}" does not exist. Current working directory: ${r}.` +
            (p ? ` Did you mean "${p}"?` : ""),
          errorCode: 1,
        };
      }
      if (Po(c))
        return {
          result: !1,
          message: `Attachment "${o}" is not accessible (${d}).`,
          errorCode: 1,
        };
      throw c;
    }
  }
  return { result: !0 };
}
async function fbt(e, t) {
  let r = [],
    o = [];
  for (let d of e) {
    if (K(d)) {
      r.push({
        path: d.file_name,
        size: d.size,
        isImage: d.is_image,
        file_uuid: d.file_uuid,
        media_type: d.media_type ?? YNe(d.file_name),
        pathValidated: !1,
      });
      continue;
    }
    let p = ot(d);
    if (ku(p))
      throw Error(
        `Attachment "${d}" is a network path (UNC or /net autofs), which is not supported.`,
      );
    let g = await L(p);
    (o.push(r.length),
      r.push({
        path: p,
        size: g.size,
        isImage: d7e.test(p),
        media_type: YNe(p),
        pathValidated: !0,
      }));
  }
  let { lane: s } = t;
  if (o.length === 0 || s === "none" || s === "sdk_hosted_disabled") return r;
  let { uploadBriefAttachment: m } = await import("../Bridge-RemoteControl/uploadBytesToBridgeStore.rrjdccq9.js"),
    c = await Promise.all(
      o.map((d) =>
        m(r[d].path, r[d].size, {
          lane: s,
          signal: t.signal,
          credentials: t.credentials,
        }),
      ),
    );
  return (
    o.forEach((d, p) => {
      let g = c[p];
      if (typeof g === "string") r[d] = { ...r[d], file_uuid: g };
      else r[d] = { ...r[d], upload_error: g.error };
    }),
    r
  );
}
export {
  zNe,
  M3t,
  VNe,
  aK,
  iR,
  mSn,
  u7e,
  KNe,
  N3t,
  Ure,
  vH,
  qpe,
  gSn,
  Bg,
  iJn,
  aJn,
  lJn,
  cJn,
  XNe,
  cbt,
  LAe,
  uJn,
  lK,
  dJn,
  Z3,
  d7e,
  pJn,
  fJn,
  hSn,
  ubt,
  dbt,
  YNe,
  _Sn,
  pbt,
  fbt,
};
