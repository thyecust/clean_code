// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { On } from "../安全文件系统(FS加固)/chunk-h64ek850.js";
import { dy } from "./chunk-862jyk0r.js";
import { AsyncLocalStorage } from "async_hooks";
import { constants } from "fs";
import {
  appendFile,
  copyFile,
  lstat,
  mkdir,
  open as u,
  readdir,
  readFile,
  stat as S,
  unlink,
  writeFile,
} from "fs/promises";
class z7t {
  read(r) {
    return readFile(r, "utf8");
  }
  readBytes(r) {
    return readFile(r);
  }
  write(r, e, t) {
    return writeFile(r, e, { encoding: "utf8", mode: t });
  }
  async mkdir(r, e) {
    try {
      await mkdir(r, { recursive: !0, mode: e });
    } catch (t) {
      if (A(t) !== "EEXIST") throw t;
    }
  }
  atomicWrite(r, e, t) {
    return On(r, e, t);
  }
  delete(r) {
    return unlink(r);
  }
  list(r) {
    return readdir(r);
  }
  append(r, e, t) {
    return appendFile(r, e, { encoding: "utf8", mode: t });
  }
  writeExclusive(r, e, t) {
    return writeFile(r, e, { encoding: "utf8", flag: "wx", mode: t });
  }
  writeBytesExclusive(r, e, t) {
    return writeFile(r, e, { flag: "wx", mode: t });
  }
  copy(r, e) {
    return copyFile(r, e);
  }
  async stat(r) {
    return { mtimeMs: (await S(r)).mtimeMs };
  }
  async lstat(r) {
    try {
      let e = await lstat(r);
      return {
        isSymbolicLink: e.isSymbolicLink(),
        isFile: e.isFile(),
        isDirectory: e.isDirectory(),
        mtimeMs: e.mtimeMs,
        nlink: e.nlink,
      };
    } catch (e) {
      if (A(e) === "ENOENT") return;
      throw e;
    }
  }
  async listEntries(r) {
    return (await readdir(r, { withFileTypes: !0 })).map((t) => ({
      name: t.name,
      isDirectory: t.isDirectory(),
      isFile: t.isFile(),
    }));
  }
  async readRange(r, e, t) {
    (a("readRange", "offset", e), a("readRange", "length", t));
    let n = await u(r, "r");
    try {
      return await c(n, e, t);
    } finally {
      await n.close();
    }
  }
  async readTail(r, e, t) {
    a("readTail", "maxBytes", e);
    let n = t?.noFollow ? constants.O_RDONLY | dy : "r",
      i = await u(r, n);
    try {
      let s = await i.stat();
      if (t?.noFollow && !s.isFile())
        throw Object.assign(Error("ENXIO: not a regular file"), {
          code: "ENXIO",
          path: r,
        });
      let { size: m } = s,
        g = Math.min(e, m);
      return await c(i, m - g, g);
    } finally {
      await i.close();
    }
  }
}
function a(r, e, t) {
  if (!Number.isInteger(t) || t < 0)
    throw RangeError(`${r}: ${e} must be a non-negative integer, got ${t}`);
}
async function c(r, e, t) {
  if (t === 0) return Buffer.alloc(0);
  let n = Buffer.alloc(t),
    i = 0;
  while (i < t) {
    let { bytesRead: s } = await r.read(n, i, t - i, e + i);
    if (s === 0) break;
    i += s;
  }
  return i === t ? n : Buffer.from(n.subarray(0, i));
}
var B = new AsyncLocalStorage();
function qt() {
  return B.getStore() ?? new z7t();
}
export { z7t, qt };
