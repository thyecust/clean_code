// [claude-code-src shim]
// Replacement for chunk-x46ksw6d.js — the real npm package qrcode (node-qrcode) v1.5.4.
// This chunk is qrcode's lib/server.js entry bundled with lib/browser.js, lib/renderer/*,
// lib/core/*, plus inlined pngjs@5.0.0 and dijkstrajs@1.0.3.
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const QRCode = require("./_source/node_modules/qrcode/lib/index.js");

export const Ydr = QRCode.create;       // qrcode.create
export const Jdr = QRCode.toCanvas;     // qrcode.toCanvas  (browser/canvas renderer)
export const eI  = QRCode.toString;     // qrcode.toString  (utf8 | terminal | svg)
export const Qdr = QRCode.toDataURL;    // qrcode.toDataURL (png -> data: URL)
export const Zdr = QRCode.toBuffer;     // qrcode.toBuffer  (png)
export const epr = QRCode.toFile;       // qrcode.toFile
export const tpr = QRCode.toFileStream; // qrcode.toFileStream (png only)
