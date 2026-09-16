// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { bc } from "../设置-配置/chunk-zqr5ctyf.js";
import { Il } from "../核心工具-进程与信号/chunk-w78brv7j.js";
import { LXe, bD } from "./chunk-cyyrj58q.js";
import { pg } from "../../00-第三方库/_未识别/第三方库-其他/chunk-jm5cswvd.js";
import { pe } from "./chunk-2c9tjhwd.js";
var o = pe(pg(), 1);
import { readdir as c, stat as p } from "fs/promises";
import { join as a, sep as f } from "path";
function NNe() {
  if (!bc()) return !1;
  let r = LXe() + f;
  return process.execPath.startsWith(r);
}
function rd(r = {}) {
  return pD(Mre(r));
}
function Mre(r = {}) {
  if (!r.pinToCurrentBinary && NNe()) {
    let t = Upe();
    return { cmd: t, prefixArgs: [], target: t };
  }
  if (bc())
    return { cmd: process.execPath, prefixArgs: [], target: process.execPath };
  let e = process.argv[1];
  if (!e)
    return { cmd: process.execPath, prefixArgs: [], target: process.execPath };
  return { cmd: process.execPath, prefixArgs: [e], target: e };
}
function Upe() {
  return a(bD(), "claude");
}
function pD(r) {
  let e = Il();
  if (e.length === 0 || r.cmd === e[0]) return r;
  return {
    cmd: e[0],
    prefixArgs: [...e.slice(1), r.cmd, ...r.prefixArgs],
    target: r.target,
  };
}
async function FNe() {
  let r = LXe(),
    e;
  try {
    e = await c(r);
  } catch {
    return null;
  }
  let t = e
    .filter((n) => !/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n) && o.valid(n))
    .sort(o.rcompare);
  for (let n of t) {
    let i = a(r, n);
    try {
      let s = await p(i);
      if (s.isFile() && s.size > 0) return i;
    } catch {}
  }
  return null;
}
export { NNe, rd, Mre, Upe, pD, FNe };
