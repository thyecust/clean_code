// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B, dl } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { getInkInstanceRegistry } from "../../01-核心基础设施/共享小工具-未细化/ink-instance-registry.js";
import { writeFileSyncTraced, getFsSurface, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { resolveExecutablePath, env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { wS, tXt } from "../../00-第三方库/which-isexe/isexe.knmpyrza.js";
import { countLineBreaks, formatPastedTextPlaceholder, expandPastedContents, getIdeDisplayName } from "../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { createTempFilePath } from "../../01-核心基础设施/核心工具-路径与平台/temp-directory.js";
import { stripMemoryTags } from "../../02-功能模块/记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";
import { spawn, spawnSync as S } from "child_process";
import { basename } from "path";
function O(t) {
  return !!resolveExecutablePath(t);
}
var b = new Set(["start", "cmd", "cmd.exe"]);
function w(t) {
  let e = t.trim().split(/\s+/);
  for (let r of e) {
    if (/^\/[^/]+$/.test(r)) continue;
    if (r.startsWith("-")) continue;
    let o = basename(r);
    if (b.has(o.toLowerCase())) continue;
    return o;
  }
  return basename(e[0] ?? t);
}
var I = [
    "code",
    "cursor",
    "windsurf",
    "codium",
    "subl",
    "atom",
    "gedit",
    "notepad++",
    "notepad",
  ],
  A = /\b(vi|vim|nvim|nano|emacs|pico|micro|helix|hx)\b/,
  _ = new Set(["code", "cursor", "windsurf", "codium"]);
function h(t) {
  let e = w(t);
  return I.find((r) => e.includes(r));
}
function v(t, e, r) {
  if (!r) return [e];
  if (_.has(t)) return ["-g", `${e}:${r}`];
  if (t === "subl") return [`${e}:${r}`];
  return [e];
}
function openFileInEditor(t, e) {
  let r = resolveEditorCommand();
  if (!r) return !1;
  let o = r.split(" "),
    l = o[0] ?? r,
    u = o.slice(1),
    p = h(r);
  if (p) {
    let i = v(p, t, e),
      f = { detached: !0, stdio: "ignore", windowsHide: !0 },
      c;
    return (
      (c = spawn(l, [...u, ...i], f)),
      c.on("error", (m) => logForDebugging(`editor spawn failed: ${m}`, { level: "error" })),
      wS(c.pid),
      c.unref(),
      !0
    );
  }
  let d = getInkInstanceRegistry().get(process.stdout);
  if (!d) return !1;
  let s = e && A.test(basename(l));
  d.enterAlternateScreen();
  try {
    let i = { stdio: "inherit" },
      f;
    {
      let c = [...u, ...(s ? [`+${e}`, t] : [t])],
        m = tXt();
      if (((f = S(l, c, { ...i, ...m })), f.error && m.cgroup !== void 0))
        f = S(l, c, i);
    }
    if (f.error)
      return (logForDebugging(`editor spawn failed: ${f.error}`, { level: "error" }), !1);
    return !0;
  } finally {
    d.exitAlternateScreen();
  }
}
class y {
  isResolved = !1;
  editor = void 0;
  resolve() {
    if (this.isResolved) return this.editor;
    if (a.VISUAL) this.editor = a.VISUAL;
    else if (a.EDITOR) this.editor = a.EDITOR;
    else {
      let t = ["code", "vi", "nano"];
      this.editor = t.find((e) => O(e));
    }
    return ((this.isResolved = !0), this.editor);
  }
  reset() {
    ((this.isResolved = !1), (this.editor = void 0));
  }
}
var P = new j(() => new y());
function T() {
  return P.of(B().host);
}
function resolveEditorCommand() {
  return dl()?.editor ?? T().resolve();
}
function getEditorDisplayName() {
  let t = resolveEditorCommand();
  if (!t) return;
  let e = w(t);
  return e && e.length <= 8 ? e : void 0;
}
import { spawnSync as x } from "child_process";
var D = { code: "code -w", subl: "subl --wait" };
function editFileInExternalEditor(t) {
  let e = getFsSurface(),
    r = getInkInstanceRegistry().get(process.stdout);
  if (!r) throw Error("Ink instance not found - cannot pause rendering");
  let o = resolveEditorCommand();
  if (!o) return { content: null };
  try {
    e.statSync(t);
  } catch {
    return { content: null };
  }
  let l = h(o) === void 0;
  if (l) r.enterAlternateScreen();
  else r.prepareTerminalForHandoff();
  try {
    let u = D[o] ?? o,
      p = u.split(" "),
      d = p[0] ?? u,
      s = p.slice(1),
      i;
    {
      let c = tXt();
      if (
        ((i = x(d, [...s, t], { stdio: "inherit", ...c })),
        i.error && c.cgroup !== void 0)
      )
        i = x(d, [...s, t], { stdio: "inherit" });
    }
    if (i.error || i.signal || (i.status !== null && i.status !== 0)) {
      let c = getIdeDisplayName(o);
      return {
        content: null,
        error: i.error
          ? `Couldn't open ${c} \u2014 ${i.error.message}`
          : i.signal
            ? `${c} closed unexpectedly (${i.signal})`
            : `${c} quit unexpectedly (exit code ${i.status})`,
      };
    }
    return { content: e.readFileSync(t, { encoding: "utf-8" }) };
  } catch {
    return { content: null };
  } finally {
    if (l) r.exitAlternateScreen();
    else r.restoreTerminalAfterHandoff();
  }
}
function L(t, e, r) {
  let o = t;
  for (let [l, u] of Object.entries(r))
    if (u.type === "text") {
      let p = parseInt(l),
        d = u.content;
      if (u.unavailable || d === "") continue;
      let s = o.indexOf(d);
      if (s !== -1) {
        let i = countLineBreaks(d),
          f = formatPastedTextPlaceholder(p, i);
        o = o.slice(0, s) + f + o.slice(s + d.length);
      }
    }
  return o;
}
var E =
    "# \u2500\u2500\u2500 Write your reply below this line \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500",
  R = 50;
function N(t) {
  let e = stripMemoryTags(t).split(`
`);
  if (e.length > R)
    ((e = e.slice(-R)), e.unshift("\u2026 (earlier output truncated)"));
  return (
    `# \u2500\u2500\u2500 Claude's last response (for reference; removed on save) \u2500\u2500\u2500
` +
    `${e.map((o) => (o ? `# ${o}` : "#")).join(`
`)}
${E}

`
  );
}
function U(t) {
  let e = t.indexOf(E);
  if (e === -1) return t;
  return t.slice(e + E.length).replace(/^\r?\n\r?\n?/, "");
}
function editTextInExternalEditor(t, e, r) {
  let o = getFsSurface(),
    l = createTempFilePath();
  try {
    let u = e ? expandPastedContents(t, e) : t,
      p = r ? N(r) + u : u;
    writeFileSyncTraced(l, p, { encoding: "utf-8", flush: !0 });
    let d = editFileInExternalEditor(l);
    if (d.content === null) return d;
    let s = d.content;
    if (r) s = U(s);
    if (
      s.endsWith(`
`) &&
      !s.endsWith(`

`)
    )
      s = s.slice(0, -1);
    if (e) s = L(s, t, e);
    return { content: s };
  } finally {
    try {
      o.unlinkSync(l);
    } catch {}
  }
}
export { openFileInEditor, resolveEditorCommand, getEditorDisplayName, editFileInExternalEditor, editTextInExternalEditor };
