// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { readFileSync } from "fs";
import { readFile } from "fs/promises";
import { isAbsolute, join } from "path";
var u = [40, 181, 47, 253];
function s(t) {
  return t.length >= 4 && u.every((e, r) => t[r] === e);
}
function _4t(t, e) {
  return isAbsolute(t) ? t : join(e, t);
}
async function qJ(t, e) {
  let r = await readFile(_4t(t, e));
  return (s(r) ? await Bun.zstdDecompress(r) : r).toString("utf8");
}
function Ke(t, e) {
  let r = _4t(t, e);
  try {
    let n = readFileSync(r);
    return (s(n) ? Bun.zstdDecompressSync(n) : n).toString("utf8");
  } catch (n) {
    throw Object.assign(
      Error("embedded text asset is missing or corrupt", { cause: n }),
      { path: r },
    );
  }
}
export { _4t, qJ, Ke };
