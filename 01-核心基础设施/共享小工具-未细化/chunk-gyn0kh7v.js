// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _n, Uw, Ce } from "../../02-功能模块/Teammates团队/chunk-qe04h4c5.js";
import { isHoverRestEnabled } from "./chunk-h62vxw7j.js";
import { wc } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getProjectsDir } from "../../02-功能模块/会话-历史-恢复/chunk-mkmy4cx2.js";
import { kd } from "../安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { isAbsolute as g, sep as a } from "path";
function l(e) {
  let n = process.cwd();
  return n.endsWith(a) ? n + e : n + a + e;
}
function ENe(e) {
  return (n) =>
    e.hostFiles.realPath(wc.workspace(n === "" || g(n) ? n : l(n)), {
      native: !0,
    });
}
function If(e) {
  return e === void 0 ? void 0 : { hoverRestOn: isHoverRestEnabled(), realPath: ENe(e) };
}
import {
  basename,
  dirname,
  isAbsolute as S,
  join as p,
  relative,
  sep as f,
} from "path";
function hu(e, n) {
  if (!isHoverRestEnabled() || n === void 0) return;
  if (!e.endsWith(".jsonl")) return;
  let t = dirname(e);
  if (dirname(t) !== getProjectsDir()) return;
  let r = basename(t),
    o = basename(e, ".jsonl");
  if (e !== p(getProjectsDir(), r, `${o}.jsonl`)) return;
  let i = Ce.transcript(r, o);
  return kd(i) === void 0 ? { backend: n, key: i } : void 0;
}
function wYn(e, n) {
  if (!isHoverRestEnabled() || n === void 0) return;
  let t = relative(getProjectsDir(), e);
  if (t === "" || t === ".." || t.startsWith(`..${f}`) || S(t)) return;
  let r = t.split(f);
  if (e !== p(getProjectsDir(), ...r)) return;
  let o = r.at(-1);
  if (
    r.length < 4 ||
    r[2] !== "subagents" ||
    o === void 0 ||
    !o.startsWith("agent-") ||
    !o.endsWith(".jsonl")
  )
    return;
  let i = o.slice(6, -6),
    d = r.slice(3, -1);
  if (!Uw([r[0], r[1], i]) || (d.length > 0 && !Uw(d))) return;
  let s = Ce.transcript(r[0], r[1], i, d.length > 0 ? d : void 0);
  return kd(s) === void 0 ? { backend: n, key: s } : void 0;
}
function sN(e) {
  if (!isHoverRestEnabled() || e === void 0) return;
  return {
    backend: e,
    transcriptKey: Ce.transcript,
    isKeySegment: _n,
    realWorkspacePath: ENe(e),
  };
}
function Mh(e) {
  return e === void 0 ? void 0 : { source: e, hoverRestOn: isHoverRestEnabled() };
}
export { ENe, If, hu, wYn, sN, Mh };
