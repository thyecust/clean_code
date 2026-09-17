// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { resolvePathInfo, getFsSurface, readBytesFromFileHandle, logForDebugging } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
function a(e, t, r) {
  E(e.statSync(t), t, r);
}
function E(e, t, r) {
  if (e.isDirectory())
    throw Object.assign(
      Error("EISDIR: illegal operation on a directory, read"),
      { code: "EISDIR", errno: -21, syscall: "read", path: t },
    );
  if (!e.isFile())
    throw Object.assign(Error("Not a regular file (device, FIFO, or socket)"), {
      code: "ERR_NOT_REGULAR_FILE",
      path: t,
    });
  if (r !== void 0 && e.size > r)
    throw Object.assign(Error("File exceeds maxBytes limit"), {
      code: "ERR_FILE_TOO_LARGE",
      path: t,
      size: e.size,
      maxBytes: r,
    });
}
function g(e, t, r) {
  if (r === void 0) return;
  if (e > r)
    throw Object.assign(Error("File exceeds maxBytes limit"), {
      code: "ERR_FILE_TOO_LARGE",
      path: t,
      size: e,
      maxBytes: r,
    });
}
function isNotRegularFileError(e) {
  return (
    e != null &&
    typeof e === "object" &&
    "code" in e &&
    e.code === "ERR_NOT_REGULAR_FILE"
  );
}
function isFileTooLargeError(e) {
  return (
    e != null &&
    typeof e === "object" &&
    "code" in e &&
    e.code === "ERR_FILE_TOO_LARGE"
  );
}
function l(e) {
  if (e.byteLength === 0) return "utf8";
  if (e.byteLength >= 2) {
    if (e[0] === 255 && e[1] === 254) return "utf16le";
  }
  if (e.byteLength >= 3 && e[0] === 239 && e[1] === 187 && e[2] === 191)
    return "utf8";
  return "utf8";
}
function decodeBufferText(e) {
  let t = l(e.subarray(0, 4096));
  return Buffer.from(e.buffer, e.byteOffset, e.byteLength)
    .toString(t)
    .replaceAll(
      `\r
`,
      `
`,
    );
}
function detectFileEncoding(e) {
  let { buffer: t, bytesRead: r } = getFsSurface().readSync(e, { length: 4096 });
  return l(t.subarray(0, r));
}
function detectLineEndings(e) {
  let t = 0,
    r = 0;
  for (let i = 0; i < e.length; i++)
    if (
      e[i] ===
      `
`
    )
      if (i > 0 && e[i - 1] === "\r") t++;
      else r++;
  return t > r ? "CRLF" : "LF";
}
function readFileSyncWithMetadata(e, t) {
  let r = getFsSurface(),
    { resolvedPath: i, isSymlink: d } = resolvePathInfo(r, e);
  if (d) logForDebugging(`Reading through symlink: ${e} -> ${i}`);
  a(r, e, t);
  let c = detectFileEncoding(e),
    o;
  if (t === void 0) o = r.readFileSync(e, { encoding: c });
  else {
    let { buffer: u, bytesRead: f } = r.readSync(e, { length: t + 1 });
    (g(f, e, t), (o = u.subarray(0, f).toString(c)));
  }
  let s = detectLineEndings(o.slice(0, 4096));
  return {
    content: o.replaceAll(
      `\r
`,
      `
`,
    ),
    encoding: c,
    lineEndings: s,
  };
}
function readFileSyncText(e, t) {
  return readFileSyncWithMetadata(e, t).content;
}
async function readFileWithMetadata(e, t) {
  let r = getFsSurface(),
    { resolvedPath: i, isSymlink: d } = resolvePathInfo(r, e);
  if (d) logForDebugging(`Reading through symlink: ${e} -> ${i}`);
  a(r, e, t);
  let c = detectFileEncoding(e),
    o = await r.readFileBytes(e, t === void 0 ? void 0 : t + 1);
  g(o.length, e, t);
  let s = o.toString(c),
    u = detectLineEndings(s.slice(0, 4096));
  return {
    content: s.replaceAll(
      `\r
`,
      `
`,
    ),
    encoding: c,
    lineEndings: u,
  };
}
async function readFileHandleWithMetadata(e, t, r) {
  E(await e.stat(), t, r);
  let i = Buffer.alloc(4096),
    { bytesRead: d } = await e.read(i, 0, i.length, 0),
    c = l(i.subarray(0, d)),
    o = r === void 0 ? await e.readFile() : await readBytesFromFileHandle(e, r + 1, "file");
  g(o.length, t, r);
  let s = o.toString(c),
    u = detectLineEndings(s.slice(0, 4096));
  return {
    content: s.replaceAll(
      `\r
`,
      `
`,
    ),
    encoding: c,
    lineEndings: u,
  };
}
export { isNotRegularFileError, isFileTooLargeError, decodeBufferText, detectFileEncoding, detectLineEndings, readFileSyncWithMetadata, readFileSyncText, readFileWithMetadata, readFileHandleWithMetadata };
